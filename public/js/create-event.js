async function formSubmit(event) {
  event.preventDefault();

  const body = {
    title: event.target.title.value,
    content: event.target.content.value,
    location: event.target.location.value,
  };
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    window.location.reload();
  }
}

document.getElementById("event-form").addEventListener("submit", formSubmit);
