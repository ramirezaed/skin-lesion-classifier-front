"use server";

export async function skinlesion(base64Image: string) {
  try {
    const result = await fetch(`${process.env.API_HOST}/api/skin`, {
      // const result = await fetch(`${process.env.API_HOST}/test-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: base64Image,
      }),
    });
    if (!result.ok) {
      console.log("status", result.status);
    }
    return await result.json();
  } catch (error) {
    console.log("Error al consultar", error);
    throw error;
  }
}
