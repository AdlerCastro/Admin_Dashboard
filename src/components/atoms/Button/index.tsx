import { forwardRef, Ref } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { ButtonProps } from './type'

const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { asChild, className, children, ...rest } = props
    const Component = asChild ? Slot : 'button'

    return (
        <Component className={cn("bg-zinc-950 text-white border-zinc-500 border-[1px] hover:bg-zinc-800 rounded-sm hover:rounded-md p-2 transition-all duration-[0.1s] hover:scale-105" ,className)} ref={ref} {...rest}>
            {children}
        </Component>
    )
})

Button.displayName = 'Button'

export default Button