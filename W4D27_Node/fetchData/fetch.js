const url = "https://jsonmock.hackerrank.com/api/transactions";
let currentPage = 1;
let totalPage = Infinity;

let dataSet = [];
async function getAllData(page = 1) {
  while (currentPage <= totalPage) {
    await fetch(url + `?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        totalPage = data.total_pages;
        currentPage = data.page + 1;
        dataSet = [...dataSet, ...data.data];
      });
  }
}

async function maximumTransfer(name, city) {
  await getAllData(currentPage);

  const dataFilter = dataSet.filter(
    (record) => record.userName === name && record.location.city === city,
  );
  let countDebit = 0;
  let countCredit = 0;
  dataFilter.forEach((record) => {
    if (record.txnType === "debit") {
        const curDebit = parseFloat(record.amount.replace("$", "").replace(",", ""));
      countDebit = countDebit < curDebit? curDebit: countDebit;
    }
    if (record.txnType === "credit") {
        const curCredit = parseFloat(record.amount.replace("$", "").replace(",", ""));
      countCredit = countCredit < curCredit? curCredit : countCredit;
        
    }
  });
  return [countDebit.toString(), countCredit.toString()];
}


maximumTransfer("John Oliver", "Ripley")
.then(res => console.log(res))

