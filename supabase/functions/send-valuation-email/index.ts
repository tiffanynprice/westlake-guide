import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ValuationRequest {
  name: string;
  email: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  has_pool: boolean;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const resendApiKey = 're_U4Y6P6p1_NYQhUgCwuVA6DuCJWrMyv47H';
    
    const supabase = createClient(supabaseUrl, supabaseKey);

    const data: ValuationRequest = await req.json();

    const { name, email, address, bedrooms, bathrooms, has_pool } = data;

    const { error: insertError } = await supabase
      .from('home_valuation_requests')
      .insert({
        name,
        email,
        address,
        bedrooms,
        bathrooms,
        has_pool,
      });

    if (insertError) {
      throw insertError;
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #000; color: #fff; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #000; margin-left: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Home Valuation Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Address:</span>
                <span class="value">${address}</span>
              </div>
              <div class="field">
                <span class="label">Bedrooms:</span>
                <span class="value">${bedrooms}</span>
              </div>
              <div class="field">
                <span class="label">Bathrooms:</span>
                <span class="value">${bathrooms}</span>
              </div>
              <div class="field">
                <span class="label">Pool:</span>
                <span class="value">${has_pool ? 'Yes' : 'No'}</span>
              </div>
              <div class="field" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                <span class="label">Submitted:</span>
                <span class="value">${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</span>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'hello@yourwestlakeguide.com',
        to: 'tiffany@legacyrealestategrp.com',
        reply_to: 'tiffanynprice@gmail.com',
        subject: `New Home Valuation Request - ${address}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    const resendData = await resendResponse.json();
    console.log('Email sent successfully:', resendData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Request submitted and email sent successfully.',
        emailId: resendData.id
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing valuation request:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});