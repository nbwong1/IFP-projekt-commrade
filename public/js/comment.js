async function handleReply(event) {
  event.preventDefault();
  const form = event.target;

  const response = await fetch(`/api/comments/${form.dataset.postId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      commentary: form.commentary.value,
    }),
  });

  if (response.ok) {
    window.location.reload();
  }
}

document.querySelectorAll(".reply-form").forEach((form) => {
  form.addEventListener("submit", handleReply);
});
