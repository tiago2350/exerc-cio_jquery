$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $(".form-input").val();

        const tarefaExiste = $("ul li")
      .toArray()
      .some((li) => $(li).text() === novaTarefa);
    if (tarefaExiste) {
      alert("Esta tarefa já existe na lista.");
      return;
    }

    const listaTarefas = $(`<li class="has-marker">${novaTarefa}</li>`);
    $(listaTarefas).appendTo("ul");
    $(".form-input").val(""); 
  });

  $("ul").on("click", "li", function () {
    $(this).toggleClass("strike-through");
  });
});