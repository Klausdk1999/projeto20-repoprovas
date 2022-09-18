# projeto20-repoprovas

- **POST** `/signup`
    - Esta **não é** uma rota autenticada.
    - Deve receber um corpo (*body*) no formato:
        
        ```jsx
        {
            email: "teste@email.com",
            password: "123456",
            confirmPassword:"123456"
        }
        ```
        
    - Deve responder com *status code* `201`.
    - Caso exista algum erro no formato do corpo enviado, responder com *status code* `422` e os erros correspondentes.
    - Caso exista algum usuário cadastrado com o e-mail enviado no corpo da requisição, responder com *status code* `409`.

- **POST** `/signin`
    
    - Esta **não é** uma rota autenticada.
    - Deve receber um corpo (*body*) no formato:
        
        ```jsx
        {
          email: "joao@email.com.br",
          password: "123"
        }
        ```
        
    - Retorna o *status code* `200` com o *token* gerado para autenticação.
    
        ```jsx
        {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJlbWFpbCI6ImF5bGFuQGJvc2Nhcmluby5mFgsnYHnPEh_ZzNP7YKvSbQ3Alug9HMCsM"
        }
        ```
    
    - Caso o usuário/senha não seja compatível (ou não exista), retornar o *status code* `401`.
    - Caso exista algum erro no formato do corpo enviado, responder com *status code* `422` .

- **POST** `/test`
    
    - Esta **não é** uma rota autenticada.
    - Deve receber um corpo (*body*) no formato:
        
        ```jsx
        {
            name: "Test n",
            pdfUrl: "https://bootcampra.notion.site/Projeto-20-RepoProvas-cb914aacfde04f96b210ba48d362a337",
            category: "Prática",
            discipline: "Humildade",
            teacher: "Bruna Hamori",
        }
        ```
        
    - Retorna o *status code* `201` 
    
- **GET** `/tests/subject`
    - Get all testes grouped by subject
    - Esta é uma rota autenticada.
    - Responde com *status code* `200` e corpo (*body*) no formato:
    
        
        - Retorna um corpo (*body*) no formato:
        
        ```json
            {
                    "number": 1,
                    "discipline": [
                    {
                        "name": "HTML e CSS",
                        "id": 1,
                        "teachersDisciplines": [
                        {
                            "id": 1,
                            "teacherId": 1,
                            "disciplineId": 1,
                            "teacher": {
                            "name": "Diego Pinho",
                            "id": 1
                            },
                            "test": []
                        }
                        ]
                    }
                    "..."
            }
        ```
        
    - Caso não exista leitura recente, responde *status code* `404`.

- **GET** `/tests/teacher`
   - Get all testes grouped by teacher

    - Esta é uma rota autenticada.
    - Responde com *status code* `200` e corpo (*body*) no formato:
        
        - Retorna um corpo (*body*) no formato:
        
        ```json
            [
                {
                    "id": 1,
                    "name": "Diego Pinho",
                    "teachersDisciplines": [
                    {
                        "id": 1,
                        "teacherId": 1,
                        "disciplineId": 1,
                        "discipline": {
                        "id": 1,
                        "name": "HTML e CSS",
                        "termId": 1
                        },
                        "test": []
                    },
                    {
                        "id": 2,
                        "teacherId": 1,
                "..."
        ```
 

Get all testes grouped by teacher
GET /tests/teacher
