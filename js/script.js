

document.addEventListener("DOMContentLoaded", function () {
  const numerosSection = document.querySelector(".numeros");
  const btnContainer = document.querySelector(".escolha");

  // Adiciona labels
  for (let i = 1; i <= 25; i++) {
      const label = document.createElement("div");
      label.classList.add("lbl_num", `num${i}`);
      label.textContent = i;
      numerosSection.appendChild(label);
  }

  // Adiciona botões
  for (let b = 1; b <= 25; b++) {
      const btn = document.createElement("button");
      btn.classList.add("btn", `btn-num${b}`);
      btn.textContent = b;
      btnContainer.appendChild(btn);

      // Adiciona evento de clique para os botões
      btn.addEventListener("click", function () {
          const labelCorrespondente = document.querySelector(`.num${b}`);
          labelCorrespondente.classList.toggle("verde");
      });
  }
});

