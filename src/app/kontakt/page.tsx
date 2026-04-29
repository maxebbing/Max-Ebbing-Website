"use client";

import { useState } from "react";

export default function KontaktPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setStatus("success");
      event.currentTarget.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="section contact-page">
      <div className="container contact-layout">
        <div className="contact-left">
          <p className="section-eyebrow">Kontakt</p>
          <h1>Projekt anfragen</h1>

          <p className="section-copy">
            Schreib kurz, worum es geht. Ich melde mich zurück und wir klären, ob
            eine Zusammenarbeit sinnvoll ist.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="E-Mail" required />

          <textarea
            name="message"
            placeholder="Worum geht es bei deinem Projekt?"
            rows={5}
            required
          />

          <button
            className="button-primary"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
          </button>

          {status === "success" && (
            <p className="form-success">Danke. Deine Anfrage wurde gesendet.</p>
          )}

          {status === "error" && (
            <p className="form-error">
              Die Nachricht konnte nicht gesendet werden.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}