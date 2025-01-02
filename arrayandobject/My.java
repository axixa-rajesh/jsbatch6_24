class A{
    A() {
        System.out.println("A constructor");
    }

}
class B extends A{
    B() {
        super();
        System.out.println("B constructor");
    }
}
public class My {

    public static void main(String[] args) {
        B obj = new B();
    }
}