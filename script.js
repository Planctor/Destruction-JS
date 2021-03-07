const roupas = ['preto-P','preto-M','preto-G','vermelho-GG','vermelho-P','vermelho-M','vermelho-G','vermelho-GG','branco-P','branco-M','branco-G','branco-GG'];

const camisas ={}

const camis = roupas.map((roupa)=>{
    [camisa,tamanho] = roupa.split('-')
    return {camisa,tamanho}
})

console.log(camis)

//retorno
//[
//  { camisa: 'preto', tamanho: 'P' },
//  { camisa: 'preto', tamanho: 'M' },
//  { camisa: 'preto', tamanho: 'G' },
//  { camisa: 'vermelho', tamanho: 'GG' },
//  { camisa: 'vermelho', tamanho: 'P' },
//  { camisa: 'vermelho', tamanho: 'M' },
//  { camisa: 'vermelho', tamanho: 'G' },
//  { camisa: 'vermelho', tamanho: 'GG' },
//  { camisa: 'branco', tamanho: 'P' },
//  { camisa: 'branco', tamanho: 'M' },
//  { camisa: 'branco', tamanho: 'G' },
//  { camisa: 'branco', tamanho: 'GG' }
//]
