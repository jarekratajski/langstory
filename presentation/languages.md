## another year, another language



![Engenius](img/pic/engenius.svg)

Anarchitect at Engenius GmbH




![4programmers](img/pic/4programmers.png)
4programmers.net



# typical drama post 

(more in summer)



> Mam 32 lata, żonę i urodziło mi się dziecko (tzn nie urodziło się samo tylko zostało urodzone ściślej mówiąc), nie mam czasu na doszkalanie się oraz naukę nowych technologii. Co zrobić ze swoim życiem? Jak wskoczyć na pozycję bardziej menagerskie gdzie nie potrzeba ciągłej technicznej nauki?



- why do we always get new technologies?

- why always new frameworks?
 
- why do we have to learn new programming languages?

- who creates all those crazy/niche languages? 

- does it ever end? 



## remember your first programming language?



```basic
10 PRINT "ZENEK JEST GUPI"
20 PRINT
30 GO TO 10

```



## your favourite language now?



- you know it well
- you like it
- you *dislike* the other
- you can do all you want in it
- you would do everything with it



![php](img/memese/php.jpg)




```
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.

96 bottles of beer on the wall, 96 bottles of beer.
Take one down and pass it around, 95 bottles of beer on the wall.

95 bottles of beer on the wall, 95 bottles of beer.
Take one down and pass it around, 94 bottles of beer on the wall.

```

song in 1500 different programming languages ...

[99 bottles of beer](http://www.99-bottles-of-beer.net/)



# let's start with a hardware



# first computers



![analitical engine](img/pic/analiticalEngine.jpg)<!-- .element class="smaller" -->



## Analitical engine

Designed in 1837+ by Charles Babbage
- first  planned computer 
- mechanical 
- not finished




```
N0 6
N1 1
N2 1
×
L1
L0
S1
-
L0
L2
S0
L2
L0
CB?11
```

first program ever?



![ada](img/pic/ada.jpg)



# computers! computers! computers!



## Atanasoff-Berry Computer
![ABC computer](img/pic/abc.jpg)<!-- .element class="smallPic" -->

1939!



## Z3 Electromechanical 

![z3](img/pic/z3.jpg)

Konrad Zuse / Berlin 1941



Zuse designed the first high level programming language

But it was forgotten and did not really *played* an important role



## Next computers

- Colossus 1943
- ENIAC 1945
- EDVAC
- BINAC
- ...



# Programming

![eniac programming](img/pic/eniac1.jpg)



# modern example 

eniac + ~30 years



```6502
a2 0a 18 a0 00 a9 01 ca f0 08 84 fb a8 65 fb 4c 14 08  
a8 a9 00 20 91 b3 20 dd bd a9 00 a0 01 20 1e ab 60
```

- 6510<!-- .element: class="fragment" data-fragment-index="1" -->
- Must be put in memory $080d<!-- .element: class="fragment" data-fragment-index="2" -->
- f0 is a conditional branch<!-- .element: class="fragment" data-fragment-index="3" -->
- 4c is an unconditional jump<!-- .element: class="fragment" data-fragment-index="4" -->



## Machine code



## Machine code

- &#10084; Simple to learn
- &#128169; Conditional branches / loops are hard to calculate
- &#128169; Hard(?) to remember opcodes (150 opcodes on 6510, \>4k opcodes on i7!  )
- &#128169; lots of mechanical/boring job
- &#128169; hard to program



# we need 



# another programming language



```asm
tmp = $fb

Start:   ldx #10 ;  decimal!
         clc
         ldy #$0
         lda #$1
loop:    dex
         beq end
         sty tmp
         tay
         adc tmp
         jmp loop
end:     tay ; result is in Y - lets print it
         lda #$00 
         jsr $B391 ; int to float
         jsr $bddd ; FAC to petscii
         lda #$00
         ldy #$01
         jsr $AB1E ; print petscii
         rts
``` 



## Assembly (1949)



For noobs that cannot remember machine codes



## Assembly

- 	&#10084; As fast as machine code
- 	&#10084; Some minimal portability (!)
- &#128169; Registers hell
- &#128169; Arithmetic calculations
- &#128169; Comments needed (!)



# meanwhile in a hardware



![mercury mem](img/pic/Mercury_memory.jpg)



# Another programming language



```
      SUBROUTINE FIB(N)
      INTEGER N,I,F0,F1,TMP
      I=0
 1060 IF(N.GT.0)THEN
      GOTO6129
      ELSE 
      GOTO7290
      ENDIF
 6129 WRITE(*,3502) 1
      N=N-1
      I=I+1
      IF(I.LT.2)THEN
      GOTO1060
      ELSE
      GOTO9321
      ENDIF
 9321 CONTINUE
      F0 = 1
      F1 = 1
      I = 2
 3502 FORMAT(I6)
      N=N+1
 2714 TMP = F1
      F1 = F1 + F0
      F0 = TMP
      WRITE(*,3502) F1
      IF(I.LT.N)THEN
      I = I + 1
      GOTO2714
      ENDIF
 7290 CONTINUE
     
      ENDSUBROUTINE
      PROGRAM MAIN
      INTEGER N
      N=10
      CALL FIB(N)
      END
```
https://gist.github.com/wrathematics/ac621cd583c4b9e3b5eb



## FORTRAN (1957)



## FORTRAN

- &#10084; simple arithmetic
- &#10084; compiled to very fast code
- &#128540; funny `type system` *variables starting on I-N are INTEGER*  other are FLOAT `¯\_(ツ)_/¯`
- &#128169; GOTO hell
- &#128540; *scientific*



# Another programming language



![Grace Hopper](/img/pic/grace_hopper.jpg)



```
       IDENTIFICATION DIVISION.
           PROGRAM-ID. "Fibonacci".
       ENVIRONMENT DIVISION.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01  ix                    BINARY-C-LONG VALUE 0.
       01  first-number          BINARY-C-LONG VALUE 0.
       01  second-number         BINARY-C-LONG VALUE 1.
       01  temp-number           BINARY-C-LONG VALUE 1.
       01  display-number        PIC Z(19)9.
       PROCEDURE DIVISION.
      
       START-PROGRAM.
           MOVE first-number TO display-number.
           DISPLAY display-number.
           MOVE second-number TO display-number.
           DISPLAY display-number.
           PERFORM VARYING ix FROM 1 BY 1 UNTIL ix = 90
               ADD first-number TO second-number GIVING temp-number
               MOVE second-number TO first-number
               MOVE temp-number TO second-number
               MOVE temp-number TO display-number
               DISPLAY display-number
           END-PERFORM.
       STOP RUN.
```



# COBOL (1959)



# COBOL

- &#10084; fast code after compilation
- &#10084; reads as english
- &#10084; no need to comment
- &#128169; extreme ceremony



# Reason #1

Automate boring stuff

![faster](img/achievement/faster.jpg)<!-- .element: class="fragment"-->



# meanwhile in a hardware



![punch card](img/pic/punchcard.jpg)



![vacuum tube](img/pic/vacuumtube.jpg)



Guess what? 



# ... another language



```
defun fibonacci(n)
  (cond
    ((eq n 1) 0)
    ((eq n 2) 1)
    ((+ (fibonacci (- n 1)) (fibonacci (- n 2))))))))
```



# LISP (1958)



![lisp](img/pic/lisp_cycles.png)<!-- .element: height="500" --> 

https://xkcd.com/297/



# Reason 2

- New paradigm

![faster](img/achievement/smarter.jpg)<!-- .element: class="fragment"-->



But we will not talk about LISP



# another language



```
PROC fibo = (INT n) INT :
    # prints out the Fibonacci sequence up to n. #
    BEGIN
        INT a := 0, b := 1;
        FOR i TO n-1 DO
            # print((whole(i, 0), " => ", whole(b, 0), new line));#
            INT c = a + b;
            a := b;
            b := c
        OD;
        b
    END;
print(whole(fibo(10),0))
```



# ALGOL (1958)



# ALGOL

Computer scientists language of 60'
- ALGOL 58 better FORTRAN<!-- .element: class="fragment"-->
- ALGOL 60<!-- .element: class="fragment"-->
- ALGOL 68 great disaster<!-- .element: class="fragment"-->



Recursion !

`Man or boy test` by Donald Knuth 



# ALGOL 68

- &#10084; way ahead of any language of that time
- &#128540; design by community
- &#128540; first designed then implemented (it took few years)
- &#128540; lot of funny operators 



![Algol 68keyboard](img/pic/algol68.png)<!-- .element width="1000" -->

algol keyboard



![Teletype](img/pic/teletype.jpg)

Reality



![Disappointment](img/pic/disappointment.gif)<!-- .element width="1000" -->




# meanwhile in a hardware



![Core Mem](img/pic/coremem.jpeg)<!-- .element width="1000" -->



![Transistor](img/pic/transistor.jpg)<!-- .element width="500" -->



# Explosion of languages



```
RECORD PERSON (
    STRING(20) NAME; 
    INTEGER AGE; 
    LOGICAL MALE; 
    REFERENCE(PERSON) FATHER, MOTHER, YOUNGESTOFFSPRING, ELDERSIBLING
);

REFERENCE(PERSON) PROCEDURE YOUNGESTUNCLE (REFERENCE(PERSON) R);
    BEGIN
        REFERENCE(PERSON) P, M;
        P := YOUNGESTOFFSPRING(FATHER(FATHER(R)));
        WHILE (P ¬= NULL) AND (¬ MALE(P)) OR (P = FATHER(R)) DO
            P := ELDERSIBLING(P);
        M := YOUNGESTOFFSPRING(MOTHER(MOTHER(R)));
        WHILE (M ¬= NULL) AND (¬ MALE(M)) DO
            M := ELDERSIBLING(M);
        IF P = NULL THEN 
            M 
        ELSE IF M = NULL THEN 
            P 
        ELSE 
            IF AGE(P) < AGE(M) THEN P ELSE M
    END

```



## ALGOL W (1966)

- Niklaus Wirth and Tony Hoare




![hoare](img/pic/hoare.jpg)

`NULL` - I call it my billion-dollar mistake



# and another programming language



```bcpl
GET "libhdr"

LET start() = VALOF
{ FOR i = 0 TO 15 DO writef("%n, ", fibonacci(i))
  writef("...*n")
  RESULTIS 0
}

AND fibonacci(n) = n<2 -> 1, fibonacci(n-1)+fibonacci(n-2)

```



## BCPL  (1967)

- &#128540; only one type 
- &#10084; language for os programming
- &#128540; hungarian notation 



# and another



```
200 IF N<0 THEN F=-1:RETURN
210 IF N<2 THEN F=1:RETURN
220 N=N-1:GOSUB 200
230 N=N+1:F=F*N
240 RETURN
```



# BASIC (1964)



# BASIC 

- &#10084; Programming for the masses
- &#10084; interpreter
- &#128169; GOTO everywhere
- &#128169;  uninitialized variables



# meanwhile in a hardware



![ram](img/pic/ram.jpg)



![8008](img/pic/Intel_8008.jpg)



![8080](img/pic/intel8080.jpg)



![Altair](img/pic/altair.jpg)

# Altair 8800



![ms](img/pic/msheroes.jpg)



# Everybody BASIC
## 1977-1995



![Disjkstra](img/pic/Dijkstra.jpg)<!-- .element: height="500" --> 

Edsger Dijkstra



GOTO considered harmful

(WTF? `(＠_＠)`) 



![Spaghetti](img/pic/spaghetti.jpg)



# another programming language?



```
function FibonacciNumber(const n: integer): integer;
begin
	// recursive case
	if n > 1 then
		result := (FibonacciNumber(n-1) + FibonacciNumber(n-2))
	// base case
	else if n = 0 then
		result := 0
	else
		result := 1;
end;
```



# Pascal (1970)

- &#10084; No more  GOTO
- &#10084; Variables must be declared
- &#10084; structural programming



# Reason 3

Prevent errors

![no bugs](img/achievement/nobugs.jpg)<!-- .element: class="fragment"--> 



## Structural programming

impossible  to create spaghetti code



![oh really](img/pic/oreally.jpeg)<!--.element height="500"-->

Oh really?



# meanwhile in a hardware



![harddisk](img/pic/harddisk.jpeg)<!-- .element height="400"-->



# and another programming language



```c
#include<stdio.h> 
   
void swap(int* a, int* b) 
{ 
    int t = *a; 
    *a = *b; 
    *b = t; 
} 
  
int partition (int arr[], int low, int high) 
{ 
    int pivot = arr[high];    // pivot 
    int i = (low - 1);  // Index of smaller element 
  
    for (int j = low; j <= high- 1; j++) 
    { 
        if (arr[j] <= pivot) 
        { 
            i++;    // increment index of smaller element 
            swap(&arr[i], &arr[j]); 
        } 
    } 
    swap(&arr[i + 1], &arr[high]); 
    return (i + 1); 
} 
  
void quickSort(int arr[], int low, int high) 
{ 
    if (low < high) 
    { 

        int pi = partition(arr, low, high); 
  
        quickSort(arr, low, pi - 1); 
        quickSort(arr, pi + 1, high); 
    } 
} 
```

from https://www.geeksforgeeks.org/quick-sort/
 



## C (1969)

- &#10084; os programing support(`*`)
- &#10084; easy low level hardware use
- &#10084; mixes easily with assembly
- &#10084; portability
- &#128169;  (void*) - where is your type now?
- &#128169;  life is too short for malloc
- &#128169;  limited (unfriendly) encapsulation



# and another language



```
bool myfunction (int i,int j) { return (i<j); }

struct myclass {
  bool operator() (int i,int j) { return (i<j);}
} myobject;

int main () {
  int myints[] = {32,71,12,45,26,80,53,33};
  std::vector<int> myvector (myints, myints+8);               // 32 71 12 45 26 80 53 33

  std::sort (myvector.begin(), myvector.begin()+4, myfunc);           //(12 32 45 71)26 80 53 33

  return 0;
}

```

from http://www.cplusplus.com/reference/algorithm/sort/



## C++

- &#10084; object oriented programming
- &#10084; provides encapsulation
- &#10084; better modularization
- &#128169;  life is too short for ~~malloc~~  new/delete
- &#128169;  operators overloading hell
- &#128540; meta-programming
- &#128169; weak security



# meanwhile in a hardware



![network](img/pic/network.jpeg)<!-- .element height="500"-->



```
public class ArrayListTest {
    public static void main(String[] args) {
        Vector lst = new Vector();
        lst.add("alpha");
        lst.add("beta");
        lst.add("charlie");
        System.out.println(lst);

        Enumeration el = lst.elements();
        while (el.hasMoreElements()) {
            Object obj = el.nextElement();
            if ( obj instanceof String) {
               String str = (String)
               System.out.println(str);
            }
        }
    }
}

```



## Java (1996)
 
 - &#128540; breaks with C compatibility
 - &#10084; keeps similar syntax
 - &#10084; great portability  (jvm)
 - &#10084; garbage collection
 - &#10084; great standard library
 - &#10084; security
 - &#10084; better multi-threading
 - &#128169; try to code in  Java 1.2 for a one day
 



# Reason 4

![gratis](img/pic/gratis.jpg)



#  and now the most successful language ever



```
[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+
(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])
[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+
(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+
[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])
[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])
[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+
(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+
(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+
(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])
[+!+[]]]((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])
[+!+[]]+(!![]+[])[+[]]+(![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])
[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+[]

```



![BE](img/pic/eich.png)



## JavaScript (1995)

 - &#10084; LISPy in core
 - &#128169; ugly in details/ bad parts
 - &#128540; Dynamically typed
 - &#128169; wasted chance



# Reason 5

Niche

![coffee](img/achievement/coffee.jpg)<!-- .element: class="fragment"--> 




# meanwhile in a hardware



![multicore](img/pic/multicore.jpg)



# another language



```
quicksort :: (Ord a) => [a] -> [a]  
quicksort [] = []  
quicksort (x:xs) =   
    let smallerSorted = quicksort [a | a <- xs, a <= x]  
        biggerSorted = quicksort [a | a <- xs, a > x]  
    in  smallerSorted ++ [x] ++ biggerSorted  l

```



# Haskell (1990)

 - &#10084;  functional
 - &#10084; pure (almost)
 - &#128540; libraries and tools



#  JVM  languages 



- groovy (powerful, no ceremony, fp)<!-- .element: class="fragment"-->
- clojure (lisp, fp)<!-- .element: class="fragment"-->
- scala (everything :-) )<!-- .element: class="fragment"-->
- kotlin (scala--  \/ java++)<!-- .element: class="fragment"-->
- eta (haskell)<!-- .element: class="fragment"-->
- many more<!-- .element: class="fragment"-->



![polyglot](img/pic/polyglot.png)



<iframe width="560" height="315" src="https://www.youtube.com/embed/OO3FANjwKHY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

who would  need that?



![types](img/pic/librarytp.png)



![types](img/pic/tpes.png)



![quality](img/pic/types.png)<!-- .element: height="500"-->
 
Less types more tests
Note: Where do You think is java?



# CODE



```java
Person person = findPerson();
if ( person != null) {
    if (person.department != null ) {
        peron.department.head = managersPool.getManager()
    }
}
```

Java



```kotlin
val person:Person? = findPerson()

person?.department?.head = managersPool.getManager()
```

Kotlin



```java
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Builder
public class Account {
    private String id;
    private String name;
    private BigDecimal amount;
}

```

Java/Lombok



![Java](img/pic/javamonitor.jpg)

Plain Java version



```kotlin
data class Account (
    private val id:String,
    private val name:String,
    private amount:BigDecimal
) {

}
```

Kotlin



If you use lombok today You just write kotlin using ugly syntax



![Lombok](img/pic/eyesbleeding.jpg)

My very balanced opinion on Lombok



```java
class A {
   private String s = "someText";
   private final B b;
   
   private R m(Arg a) {
       var x = a + Arg(7);
       return x.toR();
   }
}
```

var in java



```java
class A(private val b:B) {
   val s = "someText"
   private final B b;
   
   fun m(a:Arg):R {
       val x = a + Arg(7)
       return x.toR()
   }
}
```

val in Kotlin



```java
public void noblock(String name) {
        ws
                .findUserByName(name)
                .flatMap(user -> db
                        .contains(user.getSsn())
                        .filter(contains -> contains)
                        .map(contains -> user)
                        .switchIfEmpty(db.save(user))
                )
                .flatMap(user -> loadCart(user)
                        .collectList()
                        .flatMap(cart -> {
                            double total = cart.stream()
                                    .mapToDouble(Item::getPrice)
                                    .sum();
                            return pay(total)
                                    .map(uuid -> Pair.of(cart, uuid));
                        }))
                .flatMapMany( pair -> Flux
                        .fromIterable(pair.getFirst())
                        .map(item -> Pair.of(item, pair.getSecond())))
                .flatMap((Pair<Item, UUID> pair) -> sendEmail(pair.getFirst(), pair.getSecond()));

    }
```    



```scala
def doIt(name: String): Flux[String] = {
      val paid: Mono[(java.util.List[Item], UUID)] = for {
        user <- ws.findUserByName(name)
        contains <- db.contains(user.getSsn)
        persistentUser <- if (!contains) db.save(user) else Mono.just(user)
        cart <- loadCart(persistentUser)
        total <- Mono.just(cart.stream().mapToDouble(_.getPrice).sum())
        uuid <- pay(total)
      } yield ((cart, uuid))

      for {
          allPaidItems <- paid.flux()
          paidItem <- Flux.fromIterable(allPaidItems._1)
          sent <- sendEmail(paidItem, allPaidItems._2)
      } yield (sent)

    }
```



```java

interface EventHandler<AGGREGATE, EVENT> {
    AGGREGATE handle(AGGREGATE before, EVENT event);
}

```



```java

class MyHandler extends EventHandler<MyAggr, MyEvent> {
    public MyAggr handle(MyAgg before, MyEvent event) {
        Random.nextInt();
        LocalData.now();
        Files.new... .
    }
}

```

Oops!



```haskell
MyHandler::MyAggr->MyEvent->MyAggr

date :: IO (Integer,Int,Int) -- :: (year,month,day) 
```

Haskell



# Languages change the way you think



![Innuites](img/pic/Igloos.jpg)<!-- .element height="500"-->



They have 400 different words for **a snow**

Most of them cultural people do say loud<!-- .element: class="fragment"-->



# Remember world without mobile phones?



It would be hard to live in such a world now



You do not know you are suffering



<!-- .slide: data-transition="zoom" -->
![Love Java](img/pic/lovejava.png)<!-- .element width="600" -->




<!-- .slide: data-transition="zoom" -->
![Love Java](img/pic/lovejava2.png)<!-- .element width="600" -->



<!-- .slide: data-transition="zoom" -->
![Love Java](img/pic/lovejava3.png)<!-- .element width="600" -->



![select](img/pic/select.jpg)



![go](img/pic/go.jpg)



![Master of one](img/pic/prod_to_xp.png)

Mastering one language



![Master of two](img/pic/prod_to_xp2.png)

Mastering second language




Try on a small scale first

- prototypes
- trainings
- hackatons
- open source projects




If you spend more than 5 years in one language... this is probably too much




Learn DIFFERENT language



C# does not differ from java



# Architects?



Remember Grace Hopper?



It's easier to ask forgiveness than it is to get permission



# ultimate language?



Nope

Probably



![cyclew](img/pic/teufelkreis2.png)<!-- .element height="500"-->

Does it ever end?



![IQuit](img/pic/quit.jpg)<!-- .element width="1000" -->



OK!



Please, do a maintenance then :-)




Brave, selfish, early adopters...



Help the others



- organize trainings
- make talks
- learn about problems



# Enough



New languages are there to let you have a longer **weekends**

You can finish your job earlier and make sure that the production still works



# Questions?