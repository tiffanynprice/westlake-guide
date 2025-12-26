/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address for reply
      - `phone` (text, nullable) - Optional phone number
      - `message` (text) - The message content
      - `created_at` (timestamptz) - When the message was submitted
      - `status` (text) - Message status (new, read, replied)
  
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for anyone to insert (public form submission)
    - No public read access (only admin/backend can read)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);
