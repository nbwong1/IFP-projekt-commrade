const interested = async () => {
  const postId = document.getElementById("post-id").value;
  const response = await fetch(`/api/interest/${postId}`, {
    method: "POST",
    body: JSON.stringify({ interest: true }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#interestedBtn").addEventListener("click", interested);
