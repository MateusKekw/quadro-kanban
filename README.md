# Quadro Kanban
// Branch do Mendonça
"Playground" com o git 
comandos a serem testados:

git stash: (contexto: leve alteração no readme para demonstração do comando)
teste de stash
retorno do stash: "Saved working directory and index state WIP on mateus-stashtest1: ab6936b Munda├ºa no readme para teste dos comandos git"

git reset

git revert

git log

git diff

git reflog

git restore: (contexto: git add no readme.md modificado, assim ele fica staged, então uso git restore --staged para reverter o git add)
teste do restore
retorno do restore: (usar git status como referência)

git show

git status
teste:
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)                          (pré git restore)
        modified:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)      (pós git restore)
        modified:   README.md

git shortlog

git commit --amend

## Como Funciona

    Após abrir o site você verá sua interface simples e intuitiva onde existe quatro colunas, uma barra de pesquisa e um formulário para criação de tarefas

### Colunas

    As Colunas são onde as tarefas devem ficar a todo o momento e são nomeadas de...
    *Aberto:* Tarefas que ainda não saíram do papel
    *Andamento:* Tarefas que estão sendo feitas atualmente
    *Concluídas:* Tarefas que estão sendo finalizadas
    *Done Done:* Tarefas que acabaram de fato
### Criação de Tarefas
    
    Cada Tarefa possui três componentes principais: Título, Descrição e Prioridade, essas características ficam a vista a todo o tempo 

### Barra de Pesquisa

    A Barra de pesquisa só pesquisa de fato após o clique no botão de lupa. Ela não pesquisa prioridade, mas pesquisa dentre Título e Descrição das tarefas


## Questões

1. Qual foi sua lógica para estruturar o projeto?
    R: Primeiramente eu pensei na parte gráfica da interface, que eu resolvi rapidamente para não perder muito tempo com isso, pedi ajuda à uma IA, fazendo algumas alterações de acordo com meu gosto pessoal. Eu usei do Angular Standalone e de bibliotecas dele como o commom e o forms para gerar o formulário de criação das tarefas. Apenas criei uma pasta de componentes contendo a parte principal da interface sendo extendida na app.component pois assim eu sinto mais facilidade em consertar erros, como eu usei o angular, eu procurei usar o LocalStorage para armazenar os dados na página mesmo após fechada. Existe possibilidades de expansão deste projeto e busquei deixar o código com boas práticas para facilitar a manutenção.

2. Que parte você achou mais difícil ou travou?
    R: A função de arrastar, eu subestimei essa função e nunca fui de usar muito ela, portanto eu não esperava usar drop, dragStart e dragOver e que a implementação deles no código tenha que seguir uma sintaxe muito fechada, eu devo ter perdido umas 2-3 horas por conta de uma div no lugar errado para poder arrastar as tarefas

3. O que faria diferente se tivesse mais tempo?
    R: Definitivamente terminaria as funções, como o filtro sem ser o de busca, a ordenação das tarefas, a check-list dentro de cada tarefa entre outras pequenas coisas

4. O que faria diferente se fosse para um cliente real?
    R: Eu encarei como se fosse uma entrega para um cliente, porém eu acho que ficaria um pouco obcecado pela entrega e ficaria muito focado em entregar com o mínimo de erros possíveis, mas é basicamente a implementação das funções ditas anteriormente entre outros

5. Você usou alguma ferramenta ou inteligência artificial para ajudar? Como?
R: Sim, Utilizei para gerar um modelo de design para utilizar melhor meu tempo na lógica do programa e verificar e resolver erros, portanto tem partes no código que são da minha lógica, porém não da minha completa autoria

  Referências:
  https://www.youtube.com/playlist?list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw vídeo aulas de angular utilizadas (umas aulas que eu assisto já faz um tempo, mas vale a pena contar)
  ChatGPT - Base gráfica e correção de erros
  Gemini - Pesquisa (da onde eu descobri o localStorage)
  Documentação do Angular (poucas coisas como verificação de sintaxe e alguns comandos)
