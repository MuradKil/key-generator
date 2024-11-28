document.getElementById("generateKeyButton").addEventListener("click", async () => {
  const response = await fetch("/api/generateKey", { method: "POST" });
  const data = await response.json();
  document.getElementById("keyOutput").textContent = `Generated Key: ${data.key}`;
});