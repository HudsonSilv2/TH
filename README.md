# Nossa História — página de aniversário de namoro

## Como usar
Abra `index.html` diretamente no navegador (duplo clique já funciona). Não precisa de servidor nem instalação — o Three.js é carregado via CDN.

## O que editar
Tudo que você provavelmente vai querer mudar está no topo do arquivo `script.js`, dentro do objeto `CONFIG`:

- `herName` / `myName` — nomes de vocês
- `relationshipStart` — data de início do namoro (formato `AAAA-MM-DD`), usada no contador ao vivo
- `openingTitle`, `openingSubtitle`, `openButtonLabel` — textos da tela inicial
- `cardMessages` — array com as mensagens das cartas (adicione ou remova quantas quiser)
- `timeline` — itens da linha do tempo, cada um com `date` e `text`
- `galleryPhotos` — caminhos das fotos; troque `assets/foto1.jpg` etc. pelos arquivos reais. Enquanto a foto não existir, um placeholder elegante aparece no lugar automaticamente
- `secretMessage` — texto revelado pelo botão de mensagem secreta
- `finalMessage`, `finalSignature` — declaração final
- `musicSrc` — caminho do MP3 de fundo (ex.: `assets/musica.mp3`); `musicVolume` controla o volume inicial (0 a 1)
- `theme` — cores usadas nas partículas do fundo 3D

## Assets
Coloque suas fotos e a música dentro da pasta `assets/`:
```
assets/
  foto1.jpg
  foto2.jpg
  foto3.jpg
  foto4.jpg
  musica.mp3
```
Se algum arquivo não existir ainda, a página continua funcionando normalmente (placeholders para fotos, música simplesmente não toca).

## Detalhes técnicos
- `index.html` — estrutura da página
- `style.css` — todas as cores, tipografia e animações (variáveis de cor no topo do arquivo, em `:root`)
- `script.js` — configuração, lógica das cartas/timeline/galeria/contador e o fundo animado em Three.js (partículas que se organizam em forma de coração ao clicar em "Abrir nossa história" e depois voltam a flutuar suavemente)
- A música só inicia depois do clique no botão principal, respeitando as políticas de autoplay dos navegadores
- Reduzido peso de animação em telas menores (`prefers-reduced-motion` também é respeitado)
