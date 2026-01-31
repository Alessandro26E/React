import './RelatorioPonto.css'
import { FaRegClock } from 'react-icons/fa'
import { VscGraph } from "react-icons/vsc";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";

function RelatorioPonto() {

    return (
        <div className='relatorio-div'>
             <div className='div-title-relatorios'>
                <h1>Relatórios</h1>
                <p>Gere e baixe relatórios de presença</p>
             </div>   

             <div className='box-div-relatorios'>

                <div className='box-card'>
                    <div className='card-box-top'>
                        <span> <FaRegClock/> </span>
                        <h1>Esta Semana</h1>
                    </div>
                    <h1>38h 45m</h1>
                    <p id='text-one'>+2h da semana passada</p>
                </div>

                <div className='box-card'>
                    <div id='graphic-box' className='card-box-top'>
                        <span> <VscGraph /> </span>
                        <h1>Este Més</h1>
                    </div>
                    <h1>162h 30m</h1>
                    <p>Dentro da meta</p>
                </div>

                <div className='box-card'>
                    <div id='diaria-box' className='card-box-top'>
                        <span> <BsGraphUpArrow/> </span>
                        <h1>Média Diára</h1>
                    </div>
                    <h1>8h 7m</h1>
                    <p>Padrão: 8h</p>
                </div>

                <div className='box-card'>
                    <div id='dias-box' className='card-box-top'>
                        <span> <MdDateRange/> </span>
                        <h1>Dias Trabalhados</h1>
                    </div>
                    <h1>20d</h1>
                    <p>Este Mês</p>
                </div>

             </div>

             <div className='gerar-container'>
                <div className='title-div'>
                     <h1 id='title-gerar'>Gerar Relatório</h1>   
                </div>
                
                <div className='periodo-div'>
                    
                    <div className='periodo-card'>
                        <h1>Periodo</h1>
                        <div className='box-periodo'>

                           <div className='date-card'>
                                <p>De</p>
                                <input type="date" value="2025-01-01"  />
                           </div>

                           <div className='date-card'>
                                <p>Até</p>
                                <input type="date" value="2026-01-31"  />
                           </div>

                        </div>
                    </div>

                    <div className='tipo-div-card'>
                        <h1>Tipo de Relatório</h1>
                        <div className='box-type'>
                           <select>
                                <option value="1" selected>Resumo Diário</option>
                                <option value="2">Resumo Semanal</option>
                                <option value="2">Resumo Mensal</option>
                                <option value="2">Resumo Detalhado</option>
                            </select>
                        </div>
                    </div>

                    <div className='formato-div'>
                        <h1>Formato de Exportação</h1>
                        <select>
                            <option value="PDF" selected>PDF</option>
                            <option value="Excel (XLSX)">Excel</option>
                            <option value="CSV">CSV</option>
                        </select>
                    </div>

                    <div className='incluir-div'>
                        <h1>Incluir</h1>
                        <div className='checkbox-div'>
                            <input type="checkbox" op/>
                            <h1>Horários e intervalos</h1>
                        </div>

                         <div className='checkbox-div'>
                            <input type="checkbox" op/>
                            <h1>Horas Extras</h1>
                        </div>

                         <div className='checkbox-div'>
                            <input type="checkbox" op/>
                            <h1>Notas e comentarios</h1>
                        </div>
                        
                    </div>
                </div>
             </div>

             <div className='relatorios-recentes-div'>
                <h1>Relatórios Recentes</h1>
                <div className='scroll-div-relatorios-recentes'>
                    
                </div>
             </div>
        </div>  
    )
}

export default RelatorioPonto;