import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
        "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        const { prompt } = await req.json();
        if (!prompt || typeof prompt !== "string") {
            return new Response(
                JSON.stringify({
                    error: "Prompt is required and must be a string",
                }),
                {
                    status: 400,
                    headers: {
                        ...corsHeaders,
                        "Content-Type": "application/json",
                    },
                },
            );
        }

        const geminiApiKey = Deno.env.get("GEMINI_API_KEY");

        if (!geminiApiKey) {
            throw new Error("Missing GEMINI_API_KEY");
        }

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: prompt }],
                        },
                    ],
                }),
            },
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("Gemini API Error:", data);
            return new Response(
                JSON.stringify({
                    error: data.error?.message || "Gemini request failed",
                }),
                {
                    status: response.status,
                    headers: {
                        ...corsHeaders,
                        "Content-Type": "application/json",
                    },
                },
            );
        }

        const text = data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "{}";

        const cleanText = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return new Response(
            JSON.stringify({
                text: cleanText,
            }),
            {
                headers: {
                    ...corsHeaders,
                    "Content-Type": "application/json",
                },
            },
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: error.message,
            }),
            {
                status: 500,
                headers: {
                    ...corsHeaders,
                    "Content-Type": "application/json",
                },
            },
        );
    }
});
