import { supabase } from "../../../utils/supabase";

export async function POST(request) {
  // Get data submitted in request's form.
  const form = await request.formData();
  const formData = Object.fromEntries(form.entries());


  // Optional logging to see the responses in the command line where the
  // Next.js app is running.
  console.log(formData);

  // Guard clause checks for email and returns early if it is not found.
  if (!formData.name || !formData.email || !formData.message) {
    // Sends a HTTP bad request error code.
    return new Response(
      "One or more of the following not found: name, email, message",
      {
        status: 400,
      },
    );
  }

  // Save the form data to Supabase
  try {
    const { data, error } = await supabase
      .from("contacts")
      .insert([{
        name: formData.name,
        email: formData.email,
        message: formData.message
      }]);

    if (error) {
      console.error("Error saving to Supabase:", error);
      return new Response("Failed to save data", { status: 500 });
    }

    return new Response("Data saved successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }

  // This is just an example, so we won't do anything except redirect back to
  // the homepage.
  return new Response("Homepage redirect", {
    status: 302,
    headers: { Location: "/" },
  });
}
