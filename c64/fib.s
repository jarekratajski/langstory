; x fib seq n
; a result (next)
; y prev

; $fb stored val prev

tmp = $fb

Start:
      ldx #10; !! decimal
      clc
      ldy #$0
      lda #$1
fib: dex
      beq end
      sty tmp
      tay
      adc tmp
      jmp fib
end:
      tay
      lda #$00
      jsr $B391 ; int to float
      jsr $bddd ; FAC to petscii
      lda #$00
      ldy #$01
      jsr $AB1E; print petscii
      rts