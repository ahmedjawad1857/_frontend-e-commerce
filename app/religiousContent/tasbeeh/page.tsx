"use client";
import Cards from "@/(components)/card";
import TopSalesCard from "@/(components)/topSalesCard";
import { Heading, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Tasbeeh() {
  useEffect(() => {
    gettingData();
  });
  const [allProducts, setAllProducts] = useState([]);
  const gettingData = async () => {
    try {
      const findedData = await axios.get("http://localhost:8020/get");
      const finded = findedData.data.findedData;
      const filteredData = finded.filter(
        (item: any) => item.category == "tasbeeh"
      );
      console.log("filtered Data", filteredData);
      console.log("finded Data", findedData.data.findedData);
      setAllProducts(filteredData);
    } catch (e) {
      console.log("getting error", e);
    }
  };

  return (
    <>
      <Heading textAlign={"center"}>
        Welcome to our <b>Tasbeeh</b> section
      </Heading>

      <Heading>Top Sales</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} key="index">
        <GridItem>
          <TopSalesCard image="data:image/jpeg;base64,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" />
        </GridItem>

        <GridItem>
          <TopSalesCard image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKUApQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgUHAQIEAwj/xAA+EAACAQMDAQQIBAQFAwUAAAABAgMABBEFEiExBhNBUSIyYXGBkaGxFMHR8AcVI0JSYnLh8UOCkiQzNFOi/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQAAgUBBv/EACkRAAICAQQABgEFAQAAAAAAAAABAgMRBBIhMQUTIjJBUWEjQnGhwRT/2gAMAwEAAhEDEQA/ALxoooqECorWNdsdIQC6l/qsMrEvrNR2i1iLRdNe6kwzkhI0/wATHpVI6zqk5vZJ7iQy3bnPpdNpodk8LgPTTv5fRdmla7a6k4SNtshXeFz1FSu4V87Jrd1Jt9NVIIIUDgGmvQe1erSoLKa5kAYj+oDlvgeo9v8AzQVc4r1INPSp+xlvg1moDs/qq3MhthI8hVMkyesD41PUeuanHchScHB4Zk1ijNV3277dmynbTNIcd8OJZ8Z2+xfb7as3hHa63OWEWGGU5wenWsmvnex7W6npN89zDeyGWQ/1Eb0w3vBpkX+K+qPCQ8dmrEcMkL+j82IqqmhiWjmnhNFyCs0n9iO1Q1sC3eXvphHvZu7CYPiODyORzTeKunkWnBweGBOKMjzrBqB1rVZdGl35WWFlJKE+kjHp8MA1xtLs7XXKyW2PZMvMiS7GOBtLZJ44/wCa3EikbgwIxnI8qq687R3FzqDukgaK5DRjA8OcD/8AX7xWdT7RPJa29vAhg/DR7eGOWwVz8qF5yNReD2vas9lnwzJPEskTZVhkGvWk3sFqneacYZNzMspXd8z9hThG4dFZTkMMg+dFi8rJnail02uD+DaiiiugQrBrNFQhWf8AE2WS71mzslJEcCCTr1Y5/IfWq71mBnuHd1dGDHcrD1T5VYXb6Er2mSVjjMStGc+WQf37aW9bi/GvLK2O8m9fHg4H50hbPE+TToX6fAtaPp0uq3BWI7Ik9aTH0Hmab/5bb6VZ9/F3hdGUhicnrz+de3ZvTktdLjbbtySzE9B7689QvUupFitm3Qo2HP8AjPT5V2yaUSsFKUxy7J6hpzXAkiCJcToFc5646YpxLALkmqLcCNxBG+NvpI27keRp3066upOykV7blmubaQi4h3EhgDnIz0OMc1SrUSUGorkmo06clJPsnO2evLpGhyyxsBNKRFF/qIJz8ADVHXW/ZJLIG39QT15pq7c6pBqv8ojgZhbbneTHVeQD8cZqK1GBLn+YuilWjljZVP8A9bAr99nzqUWztqUp9jGnrVXD+RMwS5Azk+I6mpuw7P392gkSNF8leQAmpTQdF2Ri5kjzI/q5HQUz29vh/IKPmT+/rTG/rAtKXYuaGb7snrNvfSxSIqsVdM8OCOnj+wKurSdesdU4tZGOSQu5SA2OuD41UXbS9RbO1tc5kaTvB5gAEfn9KiNI1G5sLiKWCeRCr5JVunhn381dT2vARafz4bn2fRDYxVVfxDF0l+blHbZ6jKx6ez3dacLvVbiz06LUbJzeW6Y/EROQXCn+4EfvFRvalYNQsY7uEh4Z0DqSPDr+oNdt5QLQydNqk1+Ct9MJAMa42SekoPVX8vZ0PyNds53Shm9Ugxk+PpAj7/ao2BsStCnDLJ/T9hB4Hx6fH31KsQ+SVUguHHngnn7H5UoetTyMfYCVs31twCfSQ+0jb92FWaoCqAowAMAVVXYfKa7CA/Ds6n27Tx9vpVrU3T7Ty/i8cajP2FFFFFMsK1Y4FbV5y+qa5LoiEzt3pbatZ74P/lQHdER9RVbQzd3NiQEEELIh+4+NXLdryaS+03ZlLwPcWYCXGOVHAak7Ib0PUWbeH0K80rLG6vLIUT0lBc4x7qixPd3Uv/pImjUna7HO35/p08cV2Jby3Il06UBLtUPc7+NzAcDPtIxU5o8dm2mR3MjhYFQELKcLGPI58R058RVKq1L3Bb7nWvSRMOgi5i2ybp93WZiVUe7B/fnTN2Nkm0pL/Trl3nQq3dbjyynpyfLOCfZUbrGuC1iaKxVTcEegGGT/AOPGB7Tj3eXL2WF3DqP4u8meW6kIzknAUc48h8KJZKMEL0qyxtvoVNflNrrM0XKxsSVB42nxHzzW9tK7ljHMxY8H0uo8qkP4gW6XOutOiBRI5JA9oBpcZLiwl2uCRjhgfCgQlHG1GtX9Me9M7QWggSK9hlieMY3Iu4N8K3ve0tqFP4GGR2zwXG0D86Tra8EoCy84HrD866pBuQvCN5xnGfW91ESx0c8mpyzJHHqNy7zPcXcxaZuOPL2eyvC1ivtRcNG5t7cH0pcHA92OT9vbXdo2htquZ7hZnDn0Yzwu0jhicn5ezoeDTvZaVBaorzEOYwMFuEQDyHT40ZLHuE79Uk9tXRH9i9S1DRZnW+uReaY3o3ELhsiM8F1BzwPEeWffTNZyLGmpaT3veJaTNJA+c5Qnp7xkc+JJ8qQNW19NP1DudPRrhwDgsCFCsOgHjkHrwOh58HNSsWk6JqSuu+Ffwt0V6OpGcn3c/GiPoFW5T5Yo3iqNQZ4sqWbBI/xBsD6N9a7TPmGC4A2gsAR5K2Pt+dcdwpXULtXbA70MCP8AxP12GvW3y1lNBnJjcg+QB3dPiD9KUZ6ql5gmMGgyd3rOnvGfUucEDoBzn4YNW/VMdmZQ19bd567kY9h3EHHzq5lOVB8xTVPR5/xpYtj/AAZooooxjBWjjit6wRVWiEdcR5zxUdNH5ipyRMiuGeHNBawFTE3tBoUd+vfQHu7uPlHHFINzab7swXjzQnvCWiz6O89SB4Zq3Z48ZpW7WaOt7bGeFP66DJx/cKpKL7iHrmm9s+hZstOiL/hkdEK5dXc9T5fv8q6LCUidW8QenlUdbzd6ohlGZo/Fh5dD769ppRFvuCSFZdsgHgfA0hZFvs0YccG3aCDfqcT8lGK8+Qz+/pXRrOhYt1lKbiMHA8wMED4VzXU7fh9zMN0CEhvPFWE8CXNkrcYfkezjP799IW2yhhovJ7Wim7jRp90htxyvPoeIJ4+Nc8N5NZTLuBV1bo3n7vCn5rH8LqLBU9F3UADw4B/WujWNCtNSjYSxhZMcSDr/AL1qaWbshuQKzUbJYYtabr9rpME2I5HtX/qQxoeY2/ujyeg8R+fNcEnaTUNSDAwpF6QMXXCD3f3H2n4Vyajp13od0okUtET6MgHBrFxNvtu8jVTt9YeNNub+gUNNU5bs5RmKELcGYnfKWyzk5Oc55pit73vdMltHkKj1156nrSxbXTvGY1DKMZI8CfOuyCfepR+COQaGpNPk1HVBx9KJByZpX3EbzHgk/EH64Pwr1gJX0+MT4Lew4B+hb6VziQC4hPTeduT8Ofzr3Em+KWONSoVN2PYAMVVj2mXpRI6LIIp7ErgFXQYPtIJ+ufnV3gYAAql+ztt+K1e2hIyA7MQfYcr9xV00zR0YfjbXmRQUUUUcwwoooqEMEZrwkQEV75pD7YdunsppdP0GFrq8QEyyINywgdSRVWi0cjDex7RnzqHnIyRmqe1bU9T1O6aa7u5GmVcowY+g3mPKnXQNckd5NJ1CeKW6tkVhNHJvEyn24B3Dx4+dDwFcWiE7WWj6bqi3UC4hmyQB5jqv5j41y3zhrQTRDcjY3DzFNmvRR6lpk9urKZcbomPQOOn6e40jWcmbUh8hNwwD/ac8ilLo45Roaabmkvo6rXM8IhY7mYY/1KT1qy+zkhl0a2B5IRR8lA/KkHRrUPqsMQHA3Mvuwcj50y6VqJ0+2a1ClptxCA9APP61l6miVta2fYS6S3YfwSF9HHHe943VT0HU8VqCZHwMKuwsajTJNK0rysWkLDmifV7O0aQSTAkYAC8+OfzrS01Tor2sRtnveT11fT4LqBIJV3rM21geo68/Sq0v7Wbs9q0tjKRNEGISQdGHl7xVg2ev2M2pWW4sx65zgA4+teX8UYbC40+C5hhWOV34YH185OffTK9RauyVb/BXbFopdyHKnlD7PKvSKcb8vgc8EdK57VwY2t7jgg9R4eRrZE7tipGR091DlHBsV2bllEtcMTZrMBzFgn3ZI+wrstJG7vcDncNo92T+RFeWmwmfTLkEZCqv3b9a8NPkZVCYGUbp8v0FVn7cjmksTslEsL+Htr3uuSsfSWJQM/Ik/MD51aVJf8NrAw6bLeMOZmwvuHj+/KnSnKliCPO+KWqzVSx8cBRRRRDOCiisE1CCp/EjtA2g9nZHt2xd3B7qI/4c9W+AqlJ9flt9LNpGCvfHdIjdXPm3sp3/AI3XTDVdLgABCws446Etg/YVWGpR5uJGA6AKPh/xVWFguMhHcXN3KsffMxY9E9EUwWmn3llF+IjmMipzImPSC+Y88f8AFRnZa2Z7rcFG12ZA3+kVYFjbGMYx86E2Ew4iTd3htL+VdUu7iRzETbSW0u1QTyjHzGMcV7dnm/HQSPPytznkdN2eT7M1H9srbFokyelHHJJAMf2bWJUfIk/A+Vbdk9ZggsBbXEpEbZyn+YdD7/Cg3puHA1p2lMdIZJNMjtNUuLAQW67o0ZZGPegAgnk5B9vTj4126XqUFxq97d2210VFWJmB8R6wHnyfnSFr+q3FzZd3NMzyQjCjOQwpg7HsGslPiAvJ/wBIodXETupX2SeoTtZ6PujP9SQ4BHmc4paSPHA5YnJY02anam602328YINcdvpQyTg0UWTwjjs7MOBuUEdakHg/FWkml3jbo5fStnPWJx0x8sH2GuhLfuuBWt0u97dE9Yyj6cn6VbBXdyKPaHstqWk2sV3dwAL1DxtkMPEVFLlyrqCc+iwHj5GrC7Rdq47jQZtMwZOAgyOF2kZP0qvtJZZYXUShcZPdketz4fDzqSSaHtHOWcMd+zmmzWkdzbXsRhaeHfErEZIPT7NRompaba38ljdaTBPvb/3Hxk5+FcWk3GiwaJP37TfzLduiwuUI8m8OfnXZo+praXks1u6RyFFcGQKWxjnkjwOfpQrEnFIdrqlK1vH+f2Wz2YniudFtpIIFgjwVWNDkLhiPyqXqD7LakNR07cZEkdCQzIMAnr4VOU5B+lGBfFxtkn9hRRRVwRg1F6vrNvp8M+XDTxxd53Y6hfPHlUm4ypGcZHhSLre7TrnfemWWJGJW4MbHuw3VScYI/wCPGh2ScUM6aqNk/UVj2tvbjV3muppd08Um5TzjYcDj2cfWo68ktbrT7RowVuE3JNxwwyCpz5jJB9mKnO0llHZ3e+JCbeVT6ODgqfL2eXwpTnLWdwE4aJxlG8GX9ftQq5ZWGP6ypRmpxXpZLdnpvwd6iMC0bTrIuB08G+h+lPmrXcdnAXQZbB2DzqtreVTIFVpI2J4IIrou9QSBf/UTsW8Qx3E/7fSrYFLHnH4OiRnEU0fDxzLiRWHreIPvz4+HzqHg7O2t1HNLZaj3E6KX/DyKQGx1Cnpn5V2Wlzd6g6iysXkQtguSAPmcCvEx3NrdsZ4JIN5JCyD7Y8KmGTdFvBHWass3czQpcBehctkD4HFN2jyLbRT+jgbdyAe7p9KWcmPUQc+t4fSp6Ntlsx/ykfOhyiu0cbecMsHSJLea1FvMQodF2M3AVsePs/2r3kgktiUkTB8iOag9NlWWHbkghq6P5hKjRxNKpwpOH8sH9aieFyUcQuM94QMsfICtY4GjYSS8StlVXPQeNa6ddPJ+NmBU+k2MeHGPyrQyF5Vb+5OnxIFRyIkQmqaU0SRxqCxPrGlaXTJ7C5Kd0zRkkxuOlWdqVobmQSwscZ5TyrW101pWAZFI8iKsgsJ7eStLO3vJJVjETqpPDMfD9fZTjp/ZldS1O3tS7Cfau5UIPoDg5+tPdp2fgubfuJbVGQ+BGMe6mLQuz+n6KhFlbhJGGHckkt8TV1XljP8A37Y/n4Ds3oNp2f0/8JZmRgW3O8hBZj5nAFS9GKKMlgypSlOTlLsKKKKhUxXPd28VzC0UyBkcYYEV0VyXNwEwM9eKW1V8KYbpF4J54K+17RGhs5LB0LwDJt5D/wBM+A9x+hFVbPEpMltcjChufOM+Y+mavLWVaaNwc4IKsPGqf7Q2UlrqUizDLEDDkeuOmflWZp9W7m+MHo9KvNrcZ85INxLEHjk299GvonHrjwINNnZTsnZXWnW93cqskksYcsTuxuGeh4z+YpYYKy7ZG24YGNiemfA+wmp/Q+0L6RZ/glh3umdjOcBQeSvvB492DWpXPcjI1lEqZYHy3sLeBVCrnb0J5xSP/Ek2zXGnywTxtcB2jeMHJ27ScnywR9a2uu0N1doP6bEsOe8bCg+xR1HvpY1Nlij2H03PO4joPZV84FoQbeTmumIuUcHp7PKmWCHvY3iHV0IHv8KV5yG2EdOPtinKwjIeM+YFDaDT7PZb82ukSXUeBIqcE9Aeg+9Kchkkmkee6umkDkB89B0Ix5fCmie0a5jvbCLG8jeingHDK2344xSXHdOLo215DLZSkkt35GM+WSFwc++rQXAGbO23uLm2ik7vUWTcOdyZ8/LHs5qW0fWZY7qNbmUzRSEIXUjCHPGeT1P2qFnKQxlpXRUPG7qD8q008Lc31tDbOkpedDhHyQq5YnHUD9avtT7RVSZbtgrTX9pGjes7Ofdg/rTnp+lxpg7R8qX+xdmZbyS5cejHGFHsJp5jUKuMV2EeMknLnBiOJY+gHyr0ooq4MKKKKhAoooqENJGCrkmou4Ib2huAfb4V23pPd4HXzqOhAZTE/Ctyvsrzni9u6xQ+EMVLjJzXsZlgJUc48P38Krvtza72huCjbdpwRzg5GRVlsp7sFjz0b2c9fng0t9obEXVjdwNjdGRIuPLx/ftrP0tmyZq6K3bNFP3EXoNxnj/cV4O0hQvvIeM4JU4JT/apS6h7uWSIrggkY93FRM+YmV0HpLyR59QR9PrXoK58mlrKFOB220xeFWLEkcOQMmuPU8sF3LglTx1re0cLKVB9B1BQ/wCX9aL8bnjXxzTffJ57p4ZHj0gqirHt7faYvYi/aq6tUL3UcQGWMgUfGrbeBVkOB04ruOAc3yRO0JrM5XgmJPuB+VdG4s90HiWbJ2gFc5+FaOMay2cYMSfdq8hcSQJLPHjcjE8+YND+SfBr/JNGnsoxdaNbpOG2ue72OTtPXGDXnpulWNkly2m2ywsSq5zliPLJ5AzUldyyyRRTS9WOWI4xUh2Isf5leMW9KKOQmTjjA6D55oiy3gq8JZHzs3YCy02NSu15BvcHrk1L1ogxW9HF+woooqECiiioQKKKKhDzmXemPGor1XZcYK8gVM1wahCQBPH6yfUVleJ6VWQ8yPaDVS5wcnBd438RlT7DXHLGjXUe9eHBif8AL7V2LImNxHHh+leV4hwJF4br8RXnF3kag2ngqbtbp5sr5jtbG7GQPD9/Y0p3icsfLr8/+auHtppf46DeoyQMqfPPhVV3EDqzqx5Awfaa2dJbvjj5R6Oizzqk2RMSt3Mh8bd8/wDaf3966Lpg0kEg9XBPwxXXoduLi/mgbpPAyfGo1wVgMbZ3xMyGtWDyjA1UdtrPfszAbjtHYLjI70Mf+3n8qtSXqTjFV5/DuLve0Klv+nA7e/oPzqw7o44J8aMl6RKx+ohpRv1Zj4BFH0b/AGrkmJ/Cy+0g/rWuoNI7TOm/aJAzhGwWRR4H3mo9lu7SFxMpcXRDq5PQEjCkZ8Pd96DgsmTZEtzDBDDliVwAPE1aHZXSF0bSo7fjvSN0rf5j4fCoDsNoJghhvbwbpFQCNT4e2ndfCmIRwuQVks8G9ZrWsmrAzNFYFZqECisZrBPFQ4ZzRWgNFdwTJ6VqwBBB6GiiqnSCmXutQWIco5wQfDg10S8wP/lBI+FFFeP1CStml9j0v2s5JVV7I7hkI20e6q27X6XDBK88ZwS21lxwT51iiraRtTRp+HSam0RdzpB0Y29+tx3rSHO3Ztx09p86Xb+EyL+LL4/FTYKgergLn353UUV6DSttPIjqm3NtkpqMK9lddgbTHkykMbHvDnduAJHA6c4px1eZv6QX0e88fLjNFFOvoTl8HHeWotrf1i+9QTkeZrp7P2UeqazCLn1IssFx5UUUKHvOv2lqwIqoFUYAroHFFFMsWM1k9KKK4QxWc0UVCGK1J4rFFRENc0UUVY4f/9k=" />
        </GridItem>

        <GridItem>
          <TopSalesCard image="data:image/jpeg;base64,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" />
        </GridItem>

        <GridItem>
          <TopSalesCard image="data:image/jpeg;base64,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" />
        </GridItem>
      </Grid>
      <Cards product={allProducts} />
    </>
  );
}