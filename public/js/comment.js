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

//comment delete logic
async function handleDeleteReply(event) {
  const response = await fetch(
    `/api/comments/${event.target.dataset.commentId}`,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    window.location.reload();
  }
}

document.querySelectorAll(".reply-form").forEach((form) => {
  form.addEventListener("submit", handleReply);
});

document.querySelectorAll(".delete-reply").forEach((button) => {
  button.addEventListener("click", handleDeleteReply);
});
