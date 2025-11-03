document.addEventListener('DOMContentLoaded', function () {
	const botao = document.getElementById('enviar');

	function mostrarResultados(tempos) {
		const fmt = (n) => Number(n).toFixed(2);
		document.getElementById('primeiro').textContent = `1º: ${tempos[0].nome} — ${fmt(tempos[0].tempo)}s`;
		document.getElementById('segundo').textContent = `2º: ${tempos[1].nome} — ${fmt(tempos[1].tempo)}s`;
		document.getElementById('terceiro').textContent = `3º: ${tempos[2].nome} — ${fmt(tempos[2].tempo)}s`;
	}

	botao.addEventListener('click', function () {
		const v1 = document.getElementById('nadador1').value;
		const v2 = document.getElementById('nadador2').value;
		const v3 = document.getElementById('nadador3').value;

		if (v1 === '' || v2 === '' || v3 === '') {
			alert('Por favor, preencha os três tempos.');
			return;
		}

		const tempos = [
			{ nome: 'nadador 1', tempo: parseFloat(v1) },
			{ nome: 'nadador 2', tempo: parseFloat(v2) },
			{ nome: 'nadador 3', tempo: parseFloat(v3) }
		];

		if (tempos.some(t => Number.isNaN(t.tempo))) {
			alert('Insira valores numéricos válidos (ex: 12.34).');
			return;
		}

		// ordenar por tempo ascendente (menor tempo = melhor colocação)
		tempos.sort(function (a, b) {
			return a.tempo - b.tempo;
		});

		mostrarResultados(tempos);
	});
});
