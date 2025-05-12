let loadData = document.querySelector(".loadData");

const getData = async () => {
  try {
    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const data = await response.json();
    loadData.innerText = data.status;
    console.log(data.data);
  } catch (e) {
    console.log(e);
  }
};
