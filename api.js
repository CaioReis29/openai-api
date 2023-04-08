const form = document.getElementById('form-chat');

const OPENAI_API_KEY = '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'

if(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let pergunta = document.getElementById('campo-pergunta').value;

        document.getElementById('pergunta').innerHTML = pergunta;
        

        await fetch('https://api.openai.com/v1/completions', {

            method: 'POST',

            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                Authorization: 'Bearer ' + OPENAI_API_KEY
            },

            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: pergunta,
                max_tokens: 2048,
                temperature: 0.5
            }),

        })
        .then(resposta => resposta.json())
        .then(dados => {

            document.getElementById('resposta').innerHTML = dados.choices[0].text;

        })
        .catch(error => console.log(error));
    });
}