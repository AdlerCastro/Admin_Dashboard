import { forwardRef, Ref } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/services/utils/className.utils'
import { ButtonProps } from './type'

const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { asChild, className, children, ...rest } = props
    const Component = asChild ? Slot : 'button'

    return (
        <Component className={cn("bg-zinc-900 hover:bg-zinc-950 hover:scale-105 text-zinc-100 hover:text-zinc-100 rounded-md hover:rounded-sm p-1 transition-all duration-[0.1s]" ,className)} ref={ref} {...rest}>
            {children}
        </Component>
    )
})

Button.displayName = 'Button'

export default Button