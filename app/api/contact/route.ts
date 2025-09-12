import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, country, productInterest, message } = body

    // Validate required fields
    if (!name || !email || !country || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Hamadco Website

Contact Details:
- Name: ${name}
- Email: ${email}
- Company: ${company || "Not provided"}
- Phone: ${phone || "Not provided"}
- Country: ${country}
- Product Interest: ${productInterest || "Not specified"}

Message:
${message}

---
This email was sent from the Hamadco contact form.
    `.trim()

    // In a real implementation, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll simulate the email sending and log the content
    console.log("Email would be sent to info@hamadco.in:")
    console.log(emailContent)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
