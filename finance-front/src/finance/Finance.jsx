import ShowResults from "./components/ShowResults"

function Finance() {
    
    let data = {
        "atual" : 200.0,
        "semanal" : 2000.0,
        "mensal" : 20000.0
    }
    
  return (
      <div>
        <div>Receitas</div>
      <div>Despesas</div>
      <div>Balanço</div>
      
      <h2>Receitas previstas</h2>
        <ShowResults today={data.atual} thisWeek={data.semanal} thisMonth={data.mensal} />
      
        
      
      <div>Despesas previstas</div>
      <div>Balanço previsto</div>
      
      <div> Índice de receitas </div>
      <div> Índice de despesas </div>
      <div>Índice de saude financeira</div>
      
      <div>
          <h2>Regressão Linear Simples</h2>
          <div>
              <p>
                  Índice de saúde financeira previsto
              </p>
          </div>
      </div>
      </div>
  );
}

export default Finance;