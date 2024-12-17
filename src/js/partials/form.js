import { FormData } from "./form-data";

const submitBtn = document.querySelector(".form__btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const msg = document.querySelector("#msg");

  if (name.value === "" || email.value === "" || msg.value === "") {
    PNotify.error({
      title: "Ви не ввели всі данні",
      delay: 1500,
    });
  } else {
    const data = new FormData({
      name: name.value,
      email: email.value,
      msg: msg.value,
    });

    console.log(data);
    PNotify.success({
      title: "Повідомлення успішно відправлене",
      delay: 1500,
    });
  }

  name.value = "";
  email.value = "";
  msg.value = "";
});
