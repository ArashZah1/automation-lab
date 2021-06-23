import {Builder, Capabilities, By} from 'selenium-webdriver'

//import {movie} from './movie'

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//import {By, WebDriver} from 'selenium-webdriver'


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})
// export async function  search (driver: WebDriver, searchTerm: string) {
test('Movie Added', async () => {

    let addMovie = await driver.findElement(By.name("addmovie"))

    await addMovie.sendKeys('Zathura\n')

    await driver.sleep(10000)

    await addMovie.clear()

    await addMovie.sendKeys('Madagascar\n')

    await driver.sleep(10000)
//delete
    await driver.findElement(By.id('Zathura')).click();

    await driver.sleep(1000)

//cross out
    await driver.findElement(By.xpath("//span[contains(text(), 'Madagascar')] ")).click();
    
    await driver.sleep(2000)
})
