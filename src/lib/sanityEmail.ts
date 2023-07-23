import { SanityClient } from "next-sanity";
import { sanityClient } from "./sanityClient";

interface EmailInput {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
}

class SanityEmail {
  private client: SanityClient;

  constructor() {
    this.client = sanityClient;
  }

  async sendEmail(input: EmailInput): Promise<void> {
    try {
      await this.client.create({
        ...input,
        _type: "contact",
      });
    } catch (error) {
      // Handle any errors that occurred during the mutation process
      console.error("Error sending email:", error);
      throw error;
    }
  }
}

export default SanityEmail;
