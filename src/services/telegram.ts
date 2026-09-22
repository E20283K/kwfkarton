// Telegram Lead Notification Service for Karton Works Factory (KWF)

const TELEGRAM_BOT_TOKEN = "8727227121:AAFOz-n8WgwtyO21FNaY9xI01AZFAqsF4Ak";

// List of recipient chat IDs (can be personal user IDs or group IDs like "-100...")
const TELEGRAM_CHAT_IDS = [
  "5775687766",
];

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  source?: string;
}

/**
 * Sends form submission to Telegram chat(s)
 */
export async function sendLeadToTelegram(data: LeadFormData): Promise<boolean> {
  const now = new Date().toLocaleString("uz-UZ", {
    timeZone: "Asia/Tashkent",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const text = 
`📦 <b>YANGI ARIZA — KARTON WORKS FACTORY</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Mijoz:</b> ${data.name?.trim() || "Ko'rsatilmagan"}
📞 <b>Telefon:</b> <code>${data.phone?.trim()}</code>
✉️ <b>Email:</b> ${data.email?.trim() || "Ko'rsatilmagan"}
${data.source ? `📍 <b>Manba:</b> ${data.source}\n` : ""}${data.message?.trim() ? `💬 <b>Xabar / Izoh:</b>\n${data.message.trim()}\n` : ""}━━━━━━━━━━━━━━━━━━━━
🕒 <i>${now}</i>`;

  try {
    const promises = TELEGRAM_CHAT_IDS.map((chatId) =>
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML",
        }),
      }).then((res) => res.json())
    );

    const results = await Promise.all(promises);
    // Return true if at least one message succeeded
    return results.some((r) => r && r.ok);
  } catch (error) {
    console.error("Telegramga yuborishda xatolik:", error);
    return false;
  }
}
