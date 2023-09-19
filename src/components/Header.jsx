import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({presupuesto, setPresupuesto, setGastos, isValidPresupuesto, setIsValidPresupuesto, gastos}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? (
            <ControlPresupuesto setGastos={setGastos} setPresupuesto={setPresupuesto} gastos={gastos} presupuesto={Number(presupuesto)} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} />
        ) : (
            <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto} />
        )}
        
    </header>
  )
}

export default Header