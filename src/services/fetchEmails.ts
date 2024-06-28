import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2();

export const fetchUserEmails = async (accessToken: string) => {
  oauth2Client.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({
    version: "v1",
    auth: oauth2Client,
  });

  try {
    const response = await gmail.users.messages.list({
      userId: "me",
      maxResults: 1,
    });

    const messages = response.data.messages || [];

    const fullMessages = await Promise.all(
      messages.map(async (message) => {
        const fullMessage = await gmail.users.messages.get({
          userId: "me",
          id: message.id || "",
        });
        return fullMessage.data;
      })
    );

    return fullMessages;
  } catch (error) {
    console.error("Error fetching user emails:", error);
    throw error;
  }
};
