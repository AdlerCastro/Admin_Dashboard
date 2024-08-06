import React from 'react'

export function Input({
    ...rest
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) {
    return (
      <input
        placeholder="Adicione uma nova tarefa"
        {...rest}
      />
    )
  }