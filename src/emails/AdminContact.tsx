import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AdminContactEmailProps {
  contactName: string;
  message: string;
}

export const AdminContactEmail = ({
  contactName = "John Doe",
  message,
}: AdminContactEmailProps) => (
  <Html>
    <Head>
      <title>New Form Submission</title>
    </Head>
    <Preview>New Form Submission from {contactName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>{contactName},</Text>
        <Text style={paragraph}>{message}</Text>
        <Text style={paragraph}>
          Best regards,
          <br />
          The All Drives Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default AdminContactEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};
