import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  contactName: string;
}

export const ContactEmail = ({
  contactName = "John Doe",
}: ContactEmailProps) => (
  <Html>
    <Head>
      <title>All Drives Contact Form Submission</title>
    </Head>
    <Preview>
      Thank you for contacting All Drives! Discover exciting road trip
      adventures and more in our response to your message.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {contactName},</Text>
        <Text style={paragraph}>
          Thank you for reaching out to All Drives! We received your message,
          and we appreciate your interest in our platform.
        </Text>
        <Text style={paragraph}>
          One of our team members will review your inquiry shortly and get back
          to you as soon as possible. We value your feedback and are committed
          to providing you with the best possible experience.
        </Text>
        <Text style={paragraph}>
          In the meantime, feel free to explore our website and discover the
          world of breathtaking driving routes and adventurous journeys that
          await you. Whether you&apos;re planning an epic solo road trip or
          seeking like-minded explorers to join you, All Drives is here to
          support your wanderlust.
        </Text>
        <Text style={paragraph}>
          Best regards,
          <br />
          The All Drives Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};
