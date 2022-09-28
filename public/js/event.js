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

async function deleteEvent(event) {
  const response = await fetch(`/api/posts/${event.target.dataset.postId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    window.location.reload();
  }
}

document
  .querySelectorAll("#event-form")
  .forEach((form) => form.addEventListener("submit", formSubmit));

document.querySelectorAll(".delete-post").forEach((button) => {
  button.addEventListener("click", deleteEvent);
});
