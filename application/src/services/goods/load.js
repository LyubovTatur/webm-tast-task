import dataset from "../dataset.json";

const pageSize = 4;



export async function getGoods(options) {
  let pageIndex = options.pageIndex || 0;
  const maxPage = Math.ceil(dataset.stock.length/pageSize)
  if(pageIndex===maxPage){
    pageIndex=0
  }
  const start = pageIndex * pageSize;
  const goods = [];

  for (let i = start; i < start + pageSize && i < dataset.stock.length ; i++) {
    const good =  Object.assign({},dataset.stock[i % dataset.stock.length]) ;
    good.image = 'https://github.com/alexnaidovich/frontend_test_task/blob/master/src/img/'+ good.image +'?raw=true'
    goods.push(good);
  }

  const results = {
    maxPage,
    goods,
    pageIndex,
    totalMatches: dataset.stock.length
  };

  await sleep(1000);

  return results;
};

function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}