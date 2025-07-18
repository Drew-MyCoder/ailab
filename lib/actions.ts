"use server";
const googleScriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT as string;

const subscriptionScriptURL = process.env.NEXT_PUBLIC_SUBSCRIPTION as string;

export const addRegistration = async (formData: FormData) => {
  const firstName = formData.get("firstName")?.toString() || "";
  const lastName = formData.get("lastName")?.toString() || "";
  const email = formData.get("email")?.toString() || "";

  try {
    const res = await fetch(googleScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to add registration to google spreadsheet");
    }

    return {
      successMessage: `Success! You have successfully registered for our AILab!`,
    };
  } catch {
    return {
      errorMessage: `Oops! There was a problem with your registration!`,
    };
  }
};

export const addSubscription = async (subscriptionData: FormData) => {
  const email = subscriptionData.get("email")?.toString() || "";

  try {
    const res = await fetch(subscriptionScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to add subscription to google spreadsheet");
    }

    return {
      successMessage: `Success! You have successfully subscribed for our AILab!`,
    };
  } catch {
    return {
      errorMessage: `Oops! There was a problem with your subscription!`,
    };
  }
};
