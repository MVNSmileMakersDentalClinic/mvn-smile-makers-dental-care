type Web3FormsPayload = Record<string, string>;

export async function submitToWeb3Forms(data: Web3FormsPayload) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey || accessKey === "your_access_key_here") {
    throw new Error(
      "Email service is not configured yet. Please use Book on WhatsApp or call the clinic."
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...data,
    }),
  });

  const text = await response.text();

  let result: { success?: boolean; message?: string };
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error(
      "Could not send your request right now. Please book on WhatsApp or call the clinic."
    );
  }

  if (!result.success) {
    throw new Error(result.message || "Failed to submit form");
  }

  return result;
}
