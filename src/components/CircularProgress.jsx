import CircularProgressUI from '@mui/material/CircularProgress'

// eslint-disable-next-line react/prop-types
function CircularProgress({ size }) {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-12'>
      <CircularProgressUI size={size} />
    </div>
  )
}

export default CircularProgress
