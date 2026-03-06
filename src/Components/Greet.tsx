type greet={
    name?:string
}

export const Greet = (prop:greet) => {
  return (
    <div>Hello {prop.name}</div>
  )
}
