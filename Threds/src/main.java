


public class main {

	public static void main(String[] args) {
		System.out.println("Starts");
		MyThread mt=new MyThread();
		mt.start();
		for(int i=0;i<5;i++) {
			System.out.println("Hello2.0"+i);
		}
		System.out.println("End");
		
	}
}
