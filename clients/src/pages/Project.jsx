import ProjectCallToAction from '../components/ProjectCallToAction'

export default function Project() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
    <h1 className='text-3xl font-semibold'>Project</h1>
    <p className='text-md text-gray-500'>halkan waxaad ka heli kartaa project tiyada aan bixino ...</p>
    <ProjectCallToAction />
  </div>
  )
}
