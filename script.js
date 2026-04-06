document.getElementById("profileForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  let data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
});