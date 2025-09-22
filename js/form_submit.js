document.addEventListener("submit", async function (e) {
  const form = e.target.closest("#orderForm form");

  if (form) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("📤 Отправляемые данные:", data);

    try {
      // Заменить тестовый сервер https://jsonplaceholder.typicode.com/posts на реальный URL
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("✅ Тестовый ответ:", result);

      if (result) {
        alert(
          `✅ Order sent. Received.data: name: ${data.name}, phone: ${data.phone}`
        );
      }

      form.reset();
    } catch (error) {
      console.error("❌ Ошибка:", error);
      alert("❌ Ошибка сети");
    }
  }
});
