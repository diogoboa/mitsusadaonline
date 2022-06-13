function retornar_navbar()
{
    var menu_texto = `<nav id=\"nav_bar_completa\" class=\"navbar navbar-expand-md \">
    <a class=\"navbar-brand pb-2\" href=\"#\">E.E.Dr.Mitsusada Umetani</a>
    <button class=\"navbar-toggler custom-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
        <span class=\"navbar-toggler-icon\"></span>
    </button>
    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
        <ul class=\"navbar-nav\">
            <li class=\"nav-item\">
                <a class=\"nav-link\" href=\"index.html\">Página inicial</a>
            </li>
            <li class=\"nav-item dropdown\">
                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> Informações </a>
                <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">
                <li>
                        <a class=\"dropdown-item\" href=\"fotos.html\">Fotos da escola</a>
                </li>
                <li>
                    <a class=\"dropdown-item\" href=\"historia_nome.html\">História</a>
                </li>
                <li class=\"dropdown-submenu\"><a class=\"dropdown-item dropdown-toggle\" href=\"#\">Base comum</a>
                    <ul class=\"dropdown-menu\">
                    <li class=\"dropdown-submenu\">
                        <a class=\"dropdown-item dropdown-toggle\" href=\"#\">2021</a>
                        <ul class=\"dropdown-menu\">
                        <li>
                            <a class=\"dropdown-item\" href=\"calendario.html\">Calendario Escolar</a>
                        </li>
                        <li>
                            <a class=\"dropdown-item\" href=\"gestores.html\">Equipe gestora</a>
                        </li>
                        <li>
                            <a class=\"dropdown-item\" href=\"professores.html\">Professores</a>
                        </li>
                        <li>
                            <a class=\"dropdown-item\" href=\"funcionarios.html\">Funcionários</a>
                        </li>
                        </ul>
                    </li>

                      </ul>
                  </li>
                  </ul>
            </li>
            <li class=\"nav-item dropdown\">
              <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> Cursos </a>
              <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">
                <li>
                  <a class=\"dropdown-item\" href=\"utilitarios.html\">Utilitários</a>
                </li>
              <li class=\"dropdown-submenu\">
                <a class=\"dropdown-item dropdown-toggle\" href=\"#\">Informática para a internet</a>
                  <ul class=\"dropdown-menu\">
                    <li>
                      <a class=\"dropdown-item\" href=\"historia_base_tecnica.html\">História</a>
                  </li>
                  <li class=\"dropdown-submenu\">
                      <a class=\"dropdown-item dropdown-toggle\" href=\"#\">2021</a>
                      <ul class=\"dropdown-menu\">
                      <li>
                          <a class=\"dropdown-item\" href=\"curso_calendario.html\">Calendario Escolar</a>
                      </li>
                      <li>
                          <a class=\"dropdown-item\" href=\"curso_plano.html\">Plano de curso</a>
                      </li>
                      <li>
                        <a class=\"dropdown-item\" href=\"curso_professores.html\">Professores</a>
                      </li>
                      <li>
                        <a class=\"dropdown-item\" onclick=\"alerta_informacao('Estamos em manutenção','Essa página ficará pronta em breve.')\">Coordenadores</a>
                      </li>
                      <li>
                        <a class=\"dropdown-item\" onclick=\"alerta_informacao('Estamos em manutenção','Essa página ficará pronta em breve.')\">Páginas dos alunos</a>
                      </li>
                      </ul>
                  </li>
                  </ul>
              </li>
              </ul>
            </li>
            <li class=\"nav-item\">
                <a class=\"nav-link\" href=\"contato.html\">Contato</a>
            </li>
            <li class=\"nav-item\">
                <a class=\"nav-link\" onclick=\"alerta_informacao('Estamos em manutenção','Essa página ficará pronta em breve.')\">Parceiros</a>
            </li>
            <li class=\"nav-item\">
                <a class=\"nav-link\" href=\"FAQ.html\">FAQ</a>
            </li>
        </ul>
    </div>
</nav>`; 
    
    return menu_texto;
    
}

function retornar_rodape()
{
    var menu_footer = `<footer class=\"bg-light text-center text-white\">
    
    <div class=\"text-center p-3\" style=\"background-color: rgba(0, 0, 0, 0.9); bottom:0;\">
      © 2021 Copyright:
      <a class=\"text-white\" href=\"#\">Mitsusada Umetani</a>
    </div>

  </footer>`;
  
return menu_footer;
    
}

        
function alerta_informacao(titulo, texto)
{

   Swal.fire(
   titulo,
   texto,
   'info'
  );

}
