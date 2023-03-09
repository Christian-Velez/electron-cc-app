import { AgentList } from '/@/features/agents/components/AgentList'
import { AgentsSettings } from '../components/AgentsSettings'
import { CreateAgent } from '/@/features/agents/components/CreateAgent'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '/@/providers/app'
import { AgentsFilter } from '../components/AgentsFilter'
import { useState } from 'react'
import { Agent } from '/@/types/agent'
import { Button } from '/@/components/Button'

export const Agents = () => {
   const { agentList } = useAppContext()
   const [name, setName] = useState('')
   const [specialty, setSpecialty] = useState('All')

   function filterAgent(agent: Agent) {
      const nameCondition = agent
         .getName()
         .toString()
         .toLowerCase()
         .includes(name.toLocaleLowerCase())

      if (specialty === 'All') return nameCondition

      return nameCondition && agent.getSpecialty() === specialty
   }

   const filteredAgentList = agentList.filter(filterAgent)

   return (
      <div className='d-flex h-100'>
         <div
            className='p-4 md:p-5'
            style={{ width: '20%', minWidth: '400px', overflowY: 'auto' }}
         >
            <div className='w-100 d-flex justify-content-between'>
               <h3 className='fw-bold'>Agents</h3>

               <AgentsSettings />
            </div>

            <hr />
            <AgentsFilter
               specialty={specialty}
               setSpecialty={setSpecialty}
               name={name}
               setName={setName}
            />
            <CreateAgent />

            <div className='p-5 d-flex flex-column gap-1'>
               <Button fullWidth>Add new</Button>

               <Button
                  colorScheme='red'
                  fullWidth
               >
                  Add new
               </Button>

               <Button
                  colorScheme='yellow'
                  fullWidth
               >
                  Add new
               </Button>

               <Button
                  colorScheme='gray'
                  fullWidth
               >
                  Add new
               </Button>
            </div>

            {filteredAgentList.isEmpty() ? (
               <div className='d-flex w-100 justify-content-center mt-5'>
                  <h6 className='m-auto'>Agents not found</h6>
               </div>
            ) : (
               <AgentList agentList={filteredAgentList} />
            )}
         </div>

         <div
            className='p-4 md:p-5'
            style={{ width: '80%' }}
         >
            <Outlet />
         </div>
      </div>
   )
}
