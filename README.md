# 🚇🏥 MetrôSaúde: Acessibilidade a Hospitais Públicos via Rede Metroviária

---

## 📘 Definição do Problema 
A rede metroviária destaca-se por sua capacidade de transportar grandes volumes de pessoas com rapidez, previsibilidade e baixo impacto ambiental, consolidando-se como um dos meios de transporte coletivo mais eficientes nos grandes centros urbanos. Quando integrada ao contexto da saúde pública, essa infraestrutura pode desempenhar um papel estratégico na ampliação do acesso da população aos hospitais públicos. 

Alinhado à **ODS 11 (Cidades e Comunidades Sustentáveis)**, nosso projeto busca avaliar como o metrô pode contribuir para:
- Reduzir o tempo de deslocamento em situações de urgência.
- Promover maior equidade no acesso aos serviços de saúde.
- Minimizar desigualdades de mobilidade urbana. 

Visamos, assim, compreender a relação entre transporte e saúde sob uma perspectiva de planejamento urbano sustentável, identificando regiões da cidade de São Paulo onde a rede metroviária efetivamente facilita — ou ainda limita — o alcance dos cidadãos aos serviços hospitalares essenciais.

---

## 👩‍💻 Equipe
- **Julia Santos Oliveira | 10417672**
- **Larissa Yuri Sato | 10418318**

---


## 🎯 Objetivos
- Calcular a rota mais rápida entre uma estação de origem e um hospital.  
- Exibir tempo e distância de deslocamento do metrô + outro meio de transporte (caminhada, táxi, ônibus) até o destino.  
- Fornecer informações claras, atualizadas e acessíveis para qualquer usuário.  
- Servir como base para análises urbanas e planejamento de novas estações.

---

## 👥 Público-Alvo
- Usuários da rede metroviária.  
- Pacientes e acompanhantes de hospitais públicos.  
- Profissionais de saúde que utilizam transporte público.  
- Idosos e pessoas com baixa familiaridade tecnológica.

---

## 🧍‍♂️ Personas

### **Persona 1: Juliano da Silva, 31 anos**
Enfermeiro de hospital público e usuário frequente de metrô.  
**Objetivo:** encontrar a melhor rota até seu local de trabalho.  
**Dificuldades:** horários de pico, baldeações e inconsistências em mapas.  
**Cenário:** busca o hospital onde trabalha e obtém a rota mais rápida a partir da estação próxima de sua casa.

### **Persona 2: Teresa Machado, 68 anos**
Aposentada que depende do transporte público.  
**Objetivo:** localizar o hospital mais próximo que realiza seus exames.  
**Dificuldades:** excesso de informações e sites confusos.  
**Cenário:** busca “Hospitais mais próximos” e filtra por especialidade para encontrar o mais adequado.

---

## 🧭 Cenários de Uso
1. **Localizar hospital mais próximo** com base em uma estação de origem.  
2. **Exibir rota até um hospital específico**, com tempo e distância total.  
3. **Filtrar por especialidade médica**, exibindo hospitais compatíveis.  
4. **Mostrar estações mais próximas** do usuário e do hospital escolhido.

---

## ⚙️ Método GOMS (Análise de Tarefas)
**Meta:** Encontrar o hospital desejado e obter a rota mais rápida. 

**Operadores:** Abrir o app, digitar hospital ou estação, aplicar filtros, selecionar rota.  

**Métodos:**  
- Localizar hospital pelo metrô (com ou sem saber o nome).  
- Consultar estação de origem.  
- Mostrar rota principal e alternativas.  

**Regras de Seleção:**  
- Se o hospital não for conhecido → listar “Hospitais mais próximos”.  
- Se a estação não for encontrada → solicitar nova digitação.  
- Se a rota não existir → exibir aviso.

---

## 📋 Requisitos do Projeto

### Requisitos Funcionais

| Código | Descrição |
|:-------|:-----------|
| **RF01** | Botão de busca de hospitais próximos à localização do usuário. |
| **RF02** | Campo de digitação para busca de hospitais específicos pelo nome. |
| **RF03** | Filtro de especialidades médicas oferecidas por cada hospital. |
| **RF04** | Botão de busca de estação de metrô de origem. |
| **RF05** | Exibição da rota mais rápida entre a estação e o hospital selecionado. |
| **RF06** | Exibição do tempo estimado e distância total do trajeto. |
| **RF07** | Exibição de rotas alternativas, incluindo combinações com outros modais. |


### Requisitos de Dados

| Código | Descrição |
|:-------|:-----------|
| **RD01** | Base de dados de hospitais públicos de São Paulo com localização e especialidades. |
| **RD02** | Base de dados da rede metroviária com estações, linhas e conexões. |
| **RD03** | Informações sobre tempo de trajeto, distância e baldeações. |
| **RD04** | Dados sobre integração com transporte público complementar (ônibus, terminais). |
| **RD05** | Histórico de buscas anteriores para personalização da experiência do usuário. |
| **RD06** | Dados sobre acessibilidade em estações e hospitais (elevadores, rampas etc.). |


### Requisitos de Ambiente

| Código | Descrição |
|:-------|:-----------|
| **RA01** | Aplicativo compatível com smartphones Android e iOS. |
| **RA02** | Versão web simplificada para notebooks e desktops. |
| **RA03** | Deve funcionar com conexões instáveis (4G limitado ou Wi-Fi doméstico). |
| **RA04** | Interface responsiva e adaptável a diferentes tamanhos de tela. |
| **RA05** | Utilização de geolocalização em tempo real por meio de APIs de mapa (Google Maps ou equivalente). |


### Requisitos de Usuários

| Código | Descrição |
|:-------|:-----------|
| **RU01** | O sistema deve ser multiusuário, permitindo acesso simultâneo. |
| **RU02** | Deve identificar a localização do usuário para sugerir hospitais e estações próximas. |
| **RU03** | Deve atender tanto usuários iniciantes em tecnologia quanto experientes. |
| **RU04** | Considerar situações de estresse e urgência, oferecendo uso simples e direto. |
| **RU05** | Compatibilidade com smartphones, tablets e computadores. |
| **RU06** | Fornecer instruções simplificadas para usuários com pouco conhecimento em transporte ou saúde. |
| **RU07** | Seguir padrões de interação de aplicativos populares (Google Maps, Moovit, Uber). |


### Requisitos de Usabilidade

| Código | Descrição |
|:-------|:-----------|
| **RUSA01** | Interface simples, clara e intuitiva, com menus diretos e sem excesso de opções. |
| **RUSA02** | Linguagem acessível, evitando termos técnicos ou jargões. |
| **RUSA03** | Uso de ícones e mapas para facilitar a compreensão visual. |
| **RUSA04** | Informações consistentes e atualizadas em todas as telas. |
| **RUSA05** | Acessibilidade digital, incluindo leitura de texto por voz e fontes legíveis. |

---

## 🗺️ Interface Proposta
- **Protótipo no Figma:**  
  [Figma – Projeto IHC/Grafos](https://www.figma.com/design/KiJJ8dxm0PF48l1yWeD62W/Projeto---IHC---Grafos?node-id=31-911)

---

## 🧠 Tecnologias Utilizadas
- React Native, Android Studio, HTML, CSS, TypeScript.   
