const roupas = [
                'preto-P',
                'preto-M',
                'preto-G',
                'preto-GG',
                'vermelho-P',
                'vermelho-M',
                'vermelho-G',
                'vermelho-GG',
                'branco-P',
                'branco-M',
                'branco-G',
                'branco-GG'
               ];

const camisas = {}

const r = roupas.map((roupa)=>{
  const [cor, tam] = roupa.split('-')
  let arr = []
  arr += tam
  camisas[cor] = arr.slice(0,4)
  return arr
})

camisas.preto = r.slice(0,4)
camisas.vermelho = r.slice(0,4)
camisas.branco = r.slice(0,4)

const transformJson = JSON.stringify(camisas)
transformJson

//retorno
//{
//  "preto":[
//    "P",
//    "M",
//    "G",
//    "GG"
//  ],
//  "vermelho":[
//     "P",
//     "M",
//     "G",
//     "GG"
//    ],
//  "branco":[
//    "P",
//    "M",
//    "G",
//    "GG"
//  ]
//}
